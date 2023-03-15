import Container from "react-bootstrap/esm/Container";
import AskQuestion from "./AskQuestion";

const AllQuestion = [
    {"question": "Is there a free trial available?","answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    {"question": "Can I change my plan later?","answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    {"question": "What is your cancellation policy?","answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    {"question": "Can other info be added to an invoice?","answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    {"question": "How does billing work?", "answer": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
]

const Question = () => {
    return (
        <Container className="question-container">
            <div className="text-center mt-5 mb-4">
                <p className="h3">Frequently asked questions</p>
                <p className="fw-lighter">Everything you need to know about the product and billing.</p>
            </div>
            <div className="mx-auto mb-5 question-div">
                { AllQuestion?.map((data, idx) => {
                    return <AskQuestion key={idx} data={data}/>
                })}
            </div>
            
        </Container>
    );
}

export default Question;