import React, { Component } from 'react';

// 7.3.3 에러 잡아내기
class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info});
    }

    render() {
        if(this.state.error) return <div>에러가 발생했습니다.!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;