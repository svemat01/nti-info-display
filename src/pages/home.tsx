import { BaseHtml } from "@/components/layout/BaseHtml";
import { Component } from "@elysiajs/html";

export const Home: Component = () => {
    return (
        <BaseHtml>
            <h1 className="text-5xl">Hello world</h1>
            <p className="text-2xl">This is a test</p>

            <div className="flex flex-row">
                <div className="w-1/2">
                    <div className="bg-gray-200 p-4">1</div>
                </div>
                <div className="w-1/2">
                    <div className="bg-gray-200 p-4">2</div>
                </div>
            </div>
        </BaseHtml>
    );
};
