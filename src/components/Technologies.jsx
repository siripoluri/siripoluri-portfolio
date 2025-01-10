import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaAws, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiScikitlearn className="text-7xl text-yellow-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow className="text-7xl text-orange-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDatabase className="text-7xl text-blue-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-blue-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-yellow-300" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
