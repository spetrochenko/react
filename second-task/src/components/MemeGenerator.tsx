import React, { Component } from 'react'

class MemeGenerator extends Component<any, any, any> {

    constructor(props: any) {
        super(props)

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    componentDidMount() {

        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                let { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })

    }

    private handlerChange(event: any) {
        const { name, value } = event.target;

        this.setState({ [name]: value });

    }

    private handlerSubmit(event: any) {
        event.preventDefault();

        let randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        let randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg  });

    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handlerSubmit}>

                    <input
                        name="topText"
                        type="text"
                        value={this.state.topText}
                        placeholder="Top text"
                        onChange={this.handlerChange}
                    />

                    <input
                        name="bottomText"
                        type="text"
                        value={this.state.bottomText}
                        placeholder="Bottom text"
                        onChange={this.handlerChange}
                    />

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>


            </div>
        )
    }
}

export default MemeGenerator
