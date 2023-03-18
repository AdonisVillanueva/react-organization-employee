import React, { Component } from "react";
import { FileUpload } from "./FileUpload";

export class Home extends Component {
    render() {
        return(
            <div className="mt-5 d-flex justify-content-left">
                <FileUpload />
            </div>
        )
    }
}