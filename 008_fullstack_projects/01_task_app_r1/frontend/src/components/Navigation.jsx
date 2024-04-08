import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <Link to="/tasks">
                <h1>
                    Task App
                </h1>
            </Link>

            <button>
                <Link to="/tasks-create">
                create task
                </Link>
            </button>

        </div>
    )
}