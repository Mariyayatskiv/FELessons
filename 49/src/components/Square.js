import { useMemo } from "react";

function Square({a, title}) {
    const sqrt = useMemo(() => a * a, [a]);

    return (
        <div>
            <h3>{title}</h3>
            <div>
                Side: {a}
            </div>
            <div>
                Area: {sqrt}
            </div>
        </div>
    )
}

export default Square;