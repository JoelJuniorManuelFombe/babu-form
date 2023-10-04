"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { form } from "./service/form";
import { useState } from "react";

type TForm = {
    FULLNAME: string;
    EMAIL: string;
    PHONE: number;
};

export default function Home() {
    const [ msg, setMsg ] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TForm>();
    const onSubmit: SubmitHandler<TForm> = async (data) => {
        console.log(data);
        await form(data);
        setMsg(true);
    };

    return (
        <main className="bg-zinc-200 h-screen">
            <div className="container mx-auto flex flex-col justify-center items-center h-screen">
                <form
                    className="space-y-5 w-96 bg-white p-5 rounded-sm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <h2>FULLNAME</h2>
                        <input
                            className="w-full outline-none h-10 rounded-md focus:ring-blue-500 focus:border-blue-500 border px-3 bg-zinc-100"
                            type="text"
                            {...register("FULLNAME", { required: true })}
                        />
                    </div>
                    <div>
                        <h2>EMAIL</h2>
                        <input
                            className="w-full outline-none h-10 rounded-md focus:ring-blue-500 focus:border-blue-500 border px-3 bg-zinc-100"
                            type="email"
                            {...register("EMAIL", { required: true })}
                        />
                    </div>
                    <div>
                        <h2>PHONE</h2>
                        <input
                            className="w-full outline-none h-10 rounded-md focus:ring-blue-500 focus:border-blue-500 border px-3 bg-zinc-100"
                            type="tel"
                            {...register("PHONE", { required: true })}
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 px-5 py-2 rounded-md">
                            {msg ? "DONE" : "SEND"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
