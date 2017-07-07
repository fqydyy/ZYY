var ShowFace=React.createClass({
    getInitialState:function(){
        return {url:""};
    },

    handleClick:function(){
        ReactDOM.render(
        <div>hahhaah</div>,
            document.getElementById("example")
        );

    },

    render:function(){
        return (
            <div class="face">
            <a title="微笑" type="Face" class="Face1" onClick={this.handleClick}>微笑</a>
        <a title="尴尬" type="Face" class="Face2">尴尬</a>
            </div>
        )

    }
});


var Operation=React.createClass({
    getInitialState:function(){
        return {display:"none"};
    },
    handleClick:function(){
        ReactDOM.render(
        <ShowFace />,
            document.getElementById("facelist")
        );
    },

    render:function(){
        return (
            <div>
            <p class="operation">
            <a class="emoticonlist" onClick={this.handleClick}>表情</a>
        <button>提交</button>
        </p>

        </div>
        )
    }
});



ReactDOM.render(
<Operation />,
    document.getElementById("operation_area")
)