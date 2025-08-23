import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronUp, CheckCircle2, XCircle, SkipForward, ArrowLeft, ArrowRight, Flag, RefreshCw, Play, Pause, ExternalLink
} from 'lucide-react';
import questionsPool from './questions.js'; // Import questions from a separate file

// Custom hook to detect mobile view, replacing react-responsive
const useIsMobile = (maxWidth) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isMobile;
};

const QuizApp = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(75 * 60); // 75 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const isMobile = useIsMobile(768); // Using the custom hook
  const timerRef = useRef();

  const handleFinishExam = () => {
    clearInterval(timerRef.current);
    setExamFinished(true);
    setShowResults(true);
    setReviewMode(true);
  };

  useEffect(() => {
    // This effect handles the countdown timer
    if (examStarted && !isPaused && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && examStarted) {
      // The ESLint warning is here, because handleFinishExam is a missing dependency.
      // We will add it to the dependency array below.
      handleFinishExam();
    }
    return () => clearInterval(timerRef.current);
  }, [examStarted, isPaused, timeRemaining, handleFinishExam]); // Added handleFinishExam to the dependency array.

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startNewExam = () => {
    // Shuffle the entire pool of 200 questions and select the first 100 for the exam.
    const shuffledQuestions = shuffleArray(questionsPool);
    const selectedQuestions = shuffledQuestions.slice(0, 100);
    setCurrentQuestions(selectedQuestions);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setExamStarted(true);
    setExamFinished(false);
    setShowResults(false);
    setShowHint(false);
    setReviewMode(false);
    setFlaggedQuestions(new Set());
    setTimeRemaining(75 * 60);
    setIsPaused(false);
    setShowNavigation(false);
  };

  const handleAnswerChange = (option) => {
    const newAnswers = [...userAnswers];
    if (newAnswers[currentQuestionIndex] === option) {
      newAnswers[currentQuestionIndex] = null; // Deselect if already selected
    } else {
      newAnswers[currentQuestionIndex] = option;
    }
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    currentQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (question.correctAnswers.includes(userAnswer)) {
        score++;
      }
    });
    return score;
  };

  const handleToggleFlag = () => {
    const newFlags = new Set(flaggedQuestions);
    if (newFlags.has(currentQuestionIndex)) {
      newFlags.delete(currentQuestionIndex);
    } else {
      newFlags.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlags);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question) return null;

    const isCorrect = question.correctAnswers.includes(userAnswers[currentQuestionIndex]);
    const isAnswered = userAnswers[currentQuestionIndex] !== null;

    return (
      <div className="flex flex-col flex-grow p-4 md:p-8 bg-neutral-800 rounded-lg shadow-2xl space-y-6 overflow-y-auto max-h-[80vh] mx-auto w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 pb-4 border-b border-neutral-700">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-blue-400">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
            <span className="block text-sm text-neutral-400 font-mono mt-1">Domain: {question.domain}</span>
          </div>
          <div className="flex space-x-2">
            {!showResults && (
              <button
                onClick={handleToggleFlag}
                className={`p-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-neutral-600 hover:bg-neutral-700 text-white'
                }`}
              >
                <Flag size={18} />
                <span>{flaggedQuestions.has(currentQuestionIndex) ? 'Unflag' : 'Flag'}</span>
              </button>
            )}
            <button
              onClick={() => setShowHint(!showHint)}
              className={`p-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                showHint
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-neutral-600 hover:bg-neutral-700 text-white'
              }`}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>
        </div>
        <p className="text-xl text-neutral-200 leading-relaxed font-semibold">
          {question.question}
        </p>
        {showHint && (
          <div className="p-4 bg-neutral-700 rounded-lg border border-neutral-600">
            <h4 className="text-lg text-indigo-300 font-bold mb-2">Hint:</h4>
            <p className="text-neutral-300">{question.hint}</p>
          </div>
        )}
        <div className="space-y-4 flex-grow">
          {question.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === option;
            let className = `p-4 rounded-lg cursor-pointer transition-colors duration-200 text-neutral-200 font-medium border-2 ${
              isSelected ? 'border-blue-500 bg-blue-900' : 'border-neutral-700 hover:border-blue-500'
            }`;

            if (showResults) {
              const isCorrectOption = question.correctAnswers.includes(option);
              if (isCorrectOption) {
                className = 'p-4 rounded-lg text-white font-medium border-2 border-green-500 bg-green-900';
              } else if (isSelected && !isCorrectOption) {
                className = 'p-4 rounded-lg text-white font-medium border-2 border-red-500 bg-red-900';
              } else {
                className = 'p-4 rounded-lg text-neutral-400 font-medium border-2 border-neutral-700';
              }
            }

            return (
              <div
                key={index}
                onClick={() => !showResults && handleAnswerChange(option)}
                className={className}
              >
                {showResults && isCorrectOption && <CheckCircle2 className="inline-block mr-2 text-green-400" />}
                {showResults && isSelected && !isCorrectOption && <XCircle className="inline-block mr-2 text-red-400" />}
                <span className="text-base leading-tight inline-block align-middle">{option}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStartScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-white mb-4">CompTIA Security+ (SY0-701) Practice Exam</h1>
        <p className="text-lg text-neutral-300 mb-6">
          This practice exam simulates the official CompTIA Security+ (SY0-701) test.
          <br />
          You will have 75 minutes to complete 100 questions.
        </p>
        <button
          onClick={startNewExam}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors duration-200"
        >
          Start New Exam
        </button>
      </div>
    </div>
  );

  const renderResultsScreen = () => {
    const score = calculateScore();
    const totalQuestions = currentQuestions.length;
    const percentage = (score / totalQuestions) * 100;
    const isPassing = percentage >= 75;

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
        <div className="bg-neutral-800 p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h1 className="text-4xl font-extrabold text-white mb-4">Exam Results</h1>
          <p className="text-lg text-neutral-300 mb-2">
            You answered {score} out of {totalQuestions} questions correctly.
          </p>
          <p className="text-5xl font-extrabold mb-6" style={{ color: isPassing ? '#4ade80' : '#f87171' }}>
            {percentage.toFixed(1)}%
          </p>
          <p className="text-xl font-bold mb-6" style={{ color: isPassing ? '#4ade80' : '#f87171' }}>
            {isPassing ? 'Congratulations, you passed!' : 'You did not pass. Keep studying!'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                setShowResults(false);
                setReviewMode(true);
                setCurrentQuestionIndex(0);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Review Answers
            </button>
            <button
              onClick={startNewExam}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Start New Exam
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!examStarted) {
    return renderStartScreen();
  }

  if (examFinished && showResults) {
    return renderResultsScreen();
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;

  const handleSkipQuestion = () => {
    setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % currentQuestions.length);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex flex-col flex-grow w-full md:w-3/4">
          <div className="bg-neutral-800 p-4 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <RefreshCw size={24} className="text-blue-400" />
              <span className="text-xl font-bold text-blue-400">CompTIA Security+ Exam Simulator</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isPaused ? <Pause size={24} className="text-yellow-400" /> : <Play size={24} className="text-green-400" />}
                <span className="text-xl font-mono text-white">{formatTime(timeRemaining)}</span>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`py-2 px-4 rounded-lg font-bold transition-colors duration-200 ${
                  isPaused ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-600 hover:bg-yellow-700'
                }`}
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button
                onClick={handleFinishExam}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                End Exam
              </button>
            </div>
          </div>
          {renderQuestion()}
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 p-4 bg-neutral-800 rounded-lg shadow-lg">
            <button
              onClick={() => setCurrentQuestionIndex(prevIndex => Math.max(0, prevIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="bg-blue-600 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Previous</span>
            </button>
            <button
              onClick={handleSkipQuestion}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>{isLastQuestion ? 'Review' : 'Skip'}</span>
              <SkipForward size={20} />
            </button>
            <button
              onClick={() => setCurrentQuestionIndex(prevIndex => Math.min(currentQuestions.length - 1, prevIndex + 1))}
              disabled={currentQuestionIndex === currentQuestions.length - 1}
              className="bg-blue-600 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Next</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        {/* Sidebar/Navigation Pane */}
        {!isMobile && (
          <div className="w-full md:w-1/4">
            <div className="bg-neutral-800 p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">Question Navigation</h3>
              <div className="grid grid-cols-5 gap-2">
                {currentQuestions.map((_, index) => {
                  const isCurrent = index === currentQuestionIndex;
                  const isAnswered = userAnswers[index] !== null;
                  const isFlagged = flaggedQuestions.has(index);

                  let btnClass = 'p-2 rounded-md text-sm font-semibold transition-colors duration-200';
                  if (isCurrent) {
                    btnClass += ' bg-blue-600 text-white';
                  } else if (isFlagged) {
                    btnClass += ' bg-red-600 text-white hover:bg-red-700';
                  } else if (isAnswered) {
                    btnClass += ' bg-green-600 text-white hover:bg-green-700';
                  } else {
                    btnClass += ' bg-neutral-600 text-neutral-300 hover:bg-neutral-700';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={btnClass}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
