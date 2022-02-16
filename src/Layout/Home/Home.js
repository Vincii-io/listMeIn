import React from 'react'
import Users from './Users'

export default function Home() {
    return (
        <div className=" flex justify-center ">
            <div className="max-w-6xl flex flex-wrap mt-8 ">
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
            </div>
        </div>
    )
}
