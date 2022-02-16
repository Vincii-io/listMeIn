import React from 'react'
import Users from './Users'

export default function Home() {
    return (
        <div className="container mx-auto flex justify-center">
            <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
