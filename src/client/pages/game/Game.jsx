
const Game = () => {
	return(
		<body>
        <div id="grid-container">
            <div id="title-container">
                <div id="title">
                    cake
                </div>
            </div>

            <div id="info">
                <li id="points"></li>
                <li id="high_score"></li>
            </div>

            <div id="grid"></div>

        </div>


        <section id="modal" className="modal">
            <article className="modal-content">
                <span className="modal-close js-hide-modal">&times;</span>

                <div className="modal-display current start">
                    <h1 id="modal-header">cake</h1>

                    <p id="controls">
                        <strong>controls:</strong> up | down | left | right | space - pause
                    </p>

                    <p id="controls">press space to start</p>
                </div>

                <div className="modal-display pause">
                    <h1 id="modal-header">paused</h1>

                    <p id="controls">
                        <strong>controls:</strong> up | down | left | right | space - pause
                    </p>
                </div>

                <div className="modal-start">

                    <div id="game-over" className="modal-display">
                        <h1 id="modal-header">game over</h1>
                        <p id="controls" className="reset">play again?</p>
                    </div>

                    <div className="modal-credits separator">
                        <img src="./images/birthday_cake.jpeg"/>
                    </div>
                </div>
            </article>
            <div className="modal-screen js-hide-modal"></div>
        </section>


        </body>
)
}
export default Game