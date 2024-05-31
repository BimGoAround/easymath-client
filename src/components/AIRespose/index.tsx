import { AILogo } from '@/configs';

import { EllipsisWave } from '../EllipsisWave';

export const AIResponse = () => {
    return (
        <div className="mt-28 flex items-start gap-4">
            <AILogo />
            <div className="flex items-end gap-1">
                <span className="text-zinc-400 ">EasyMath is thinking</span>

                <EllipsisWave className="mb-1" />
            </div>
        </div>
    );
};
