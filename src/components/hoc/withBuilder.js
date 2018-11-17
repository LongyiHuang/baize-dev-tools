import React from 'react';
const wihtBuilder = (build) => (WrappedComponent) => {
    return class _WithBuilder extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                text:"",
                copied:false
            }
        }

        handleCopy = (e) => {
            console.log("copy")
            this.setState({
                copied:true
            })
        }

        handleBulid = () => {
            this.setState({
                text:build,
                copied:false
            })
        }
        render(){

            const {text,copied} = this.state;
            return (
                <WrappedComponent
                    {...this.props}
                    onBuild={this.handleBulid}
                    onCopy={this.handleCopy}
                    text={text}
                    copied={copied}
                />
            )
        }
    }
}

export default wihtBuilder;