import ProcessingSteps from '../process.jsx';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import './index.css';
import Typewriter from "../Typewriter";
import { Alt } from 'react-bootstrap-icons';
const information = [

        {
            id: uuidv4(),
            title: "S tep 1: Paddy Loading into Hopper",
            description: "The process begins with workers carefully bringing each bag of paddy from the godown to the milling area. The paddy is poured into a large cone-shaped hopper, specially constructed below ground level for easier handling and storage. From here, a conveyor belt carries the grains to a wooden swifter, where larger impurities—such as big soil clumps, stones, and grass—are removed. This ensures that only cleaner paddy moves forward in the process. Once screened, the paddy is transported to the next stage via another conveyor belt, maintaining a smooth and efficient workflow.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975185/step-1_unzwn5.mp4"  
        },
        {
            id: uuidv4(),
            title: "S tep 2: Converting the paddy to brown rice",
            description: "From the initial cleaning stage, the paddy travels via a conveyor belt to another cone-shaped hopper positioned above the de-husking machine. This machine removes the outer husk layer of the paddy, revealing the brown rice beneath. The de-husking process is carried out with precision to ensure the grain remains intact while efficiently separating the husk. Once de-husked, the brown rice is transferred to the next stage through a conveyor belt, ready for further processing and refinement.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975185/step-1_unzwn5.mp4"
        },
        {
            id: uuidv4(),
            title: "S tep 3: Cleaning & Re-Husking",
            description: "After de-husking, the rice is transferred via a conveyor belt to a specialized swifter equipped with three output channels. This machine carefully separates the grains based on their processing quality. Any rice that has not been de-husked properly, or only partially, is redirected back to the de-husking stage for reprocessing. The fully de-husked brown rice, meeting the required quality standards, moves forward to the next stage of milling. This step ensures that only properly processed grains proceed, maintaining uniformity and quality in the final product.",
            url : "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975186/Step-2_ttckos.mp4"
        },
        {
            id: uuidv4(),
            title: "S tep 4: Brown Rice Cleaning",
            description: "In this stage, the brown rice passes through a de-stoner machine for an additional round of cleaning. This process removes any remaining small soil particles or tiny stones that may have slipped through earlier stages. By ensuring the rice is free from even the smallest impurities, the quality and safety of the product are further improved. Once thoroughly cleaned, the rice is transferred to the next stage of processing.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975184/Step-3_uxwszc.mp4"
        },
        {
            id: uuidv4(),
            title: "S tep 5: Brown Rice Polishing",
            description: "At this stage, the brown rice is transformed into the familiar white rice we use in our daily lives. Using a polishing machine, the thin brown bran layer on the rice is gently removed, revealing the smooth, white grain underneath. This process not only enhances the appearance of the rice but also gives it the soft texture preferred in most kitchens. Once polished, the rice is ready for the final stages of inspection and packaging.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975183/Step-4_z8cbew.mp4"
        },
        {
            id: uuidv4(),
            title: "S tep 6: Broken Rice Separation",
            description: "Once polishing is complete, the white rice is fed into a length grader machine. This equipment separates the grains according to size, ensuring that broken rice is carefully removed from the whole grains. The process is precise, protecting the quality of the main rice batch while allowing the broken grains to be collected for separate packaging or other uses. With grading complete, only uniform, high-quality whole grains move forward to the next stage.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975183/Step-5_iybumh.mp4"
        }, 
        {
            id: uuidv4(),
            title: "S tep 7: Stone Separation",
            description: "In this stage, the polished rice undergoes one final de-stoning process. Using specialized machines, any remaining soil particles or tiny stones are carefully removed to ensure absolute cleanliness. This extra step guarantees that the rice is free from impurities before it reaches the packaging stage, delivering a safe and high-quality product to consumers.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975184/Step-6_nzps7v.mp4"
        },
        {
            id: uuidv4(),
            title: "S tep 8: Rice Bagging",
            description: "After the final de-stoning, the rice is immediately packed to preserve its freshness and quality. The grains are measured and filled into bags, which are then sealed securely. This task is carried out either by the workers or personally by the owner, Mr. Venkat Reddy, who takes pride in overseeing the packing process. His involvement ensures that every bag leaving the mill meets the highest standards before reaching customers.",
            url: "https://res.cloudinary.com/dss6kupcu/video/upload/v1754975184/Step-6_nzps7v.mp4"
        }
        ];

const ManufactureProcess = () => {
    return (
        <div className='manufacture-process'>
            <h1>Manufacture Process</h1>
            <p>Now we will detail the manufacturing process of rice at Prajitha Reddy Rice Mill.</p>
            <p>We ensure quality and efficiency in every step of our rice production.</p>
            <div>
                {information.map((step) => (
                    <div className='container-1' key={step.id}>
                        <video controls className='video-container col-4'>
                            <source className='video-source' src={step.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='text-container'>
                            <h2>
                                <Typewriter text={step.title} />
                            </h2>
                            <p>
                                <Typewriter text={step.description} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ManufactureProcess;
