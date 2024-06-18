import React, { useState } from 'react';
import '../Assets/css/FAQSection.css';

const FAQSection = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };

    const faqData = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "How do you use hooks in React?",
            answer: "Hooks are functions that let you use state and other React features in functional components."
        },
        {
            question: "What is JSX?",
            answer: "JSX stands for JavaScript XML. It allows us to write HTML in React."
        },
        {
            question: "How do you manage state in React?",
            answer: "State in React can be managed using the useState hook for functional components and this.setState in class components."
        },
        {
            question: "How do you manage state in React?",
            answer: "State in React can be managed using the useState hook for functional components and this.setState in class components."
        },
        {
            question: "How do you manage state in React?",
            answer: "->State in React can be managed using the useState hook for functional components and this.setState in class components."
        },
        {
            question: "How do you manage state in React?",
            answer: "State in React can be managed using the useState hook for functional components and this.setState in class components."
        },
        {
            question: "What are props in React?",
            answer: "Props are arguments passed into React components, which can be used to pass data from one component to another."
        }
    ];

    return (
        <div className="faq-section">
            {/* <h2>Frequently Asked Questions</h2> */}
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggle(index)}>
                            <span>{item.question}</span>
                            <span className="icon">
                                {selected === index ? '-' : '+'}
                            </span>
                        </div>
                        <div className={`faq-answer ${selected === index ? 'show' : ''}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
