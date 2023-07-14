import List from '@/components/ui/List';
import { Eye, History, ThumbsUp } from 'lucide-react';
import { FC } from 'react';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 gap-7">
            <div className="flex flex-1">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/Djo73Uwks4A"
                ></iframe>
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-4">
                    <div className="text-2xl text-highlight font-semibold">
                        This is my Intro Video
                    </div>
                    <div className="flex gap-4">
                        <List variant="info" sizes="xs">
                            <Eye size={16} />
                            2,36,898
                        </List>
                        <List variant="info" sizes="xs">
                            <History size={16} /> 1 month ago
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> 23,729
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm max-w-[500px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptate ipsa eligendi esse? Excepturi aspernatur,
                    doloribus reprehenderit odio inventore aut repudiandae
                    obcaecati magni possimus accusantium et perferendis placeat
                    illum, modi natus!
                </div>
            </div>
        </div>
    );
};

export default Intro;