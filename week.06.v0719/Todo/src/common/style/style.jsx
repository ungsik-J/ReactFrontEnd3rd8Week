import React from 'react'

export default function style() {
    const todoStyle = {
        marginTop: "0rem",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const todoStyle1 = {
        marginTop: "0rem"
    }

    const style_z = () => {

        return { todoStyle1: todoStyle1 }
    }

    return (
        <div>
            <style_z />
        </div>
    )
}
