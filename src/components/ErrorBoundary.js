import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    };
    componentDidCatch = (error) => {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <p>Someting</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;