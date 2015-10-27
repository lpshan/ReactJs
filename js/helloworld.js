/*
var names = ['Alice' , 'Shan' ,'Kate'];

ReactDOM.render(
  	// <h1>Hello,world</h1>,


  	//2.JSX 语法
  	<div>
	{
		names.map(function(name){
			return <div>Hello,{name}</div>
		})
	}
  	</div>,
 	document.getElementById('example')
);*/


 	//3.组件
 	/*var HelloMessage = React.createClass({
 		render : function(){
 			return <h1>Hello {this.props.name}</h1>;
 		}
 	});

 	ReactDOM.render(
 		<HelloMessage name="John"></HelloMessage>,
 		document.getElementById('example')
 		);*/



	//4.this.props.children
	/*var NotesList = React.createClass({
		render: function(){
		return(
				<ol>
				{
					this.props.children.map(function(child){
						return <li>{child}</li>
					})
				}
				</ol>
			);
		}
	});

	ReactDOM.render(
		<NotesList>
			<span>hello</span>
			<span>world</span>
		</NotesList>,
		document.body
	);*/



	//5.从组件获取真实 DOM 的节点
	var MyComponent = React.createClass({
	  handleClick: function() {
	    ReactDOM.findDOMNode(this.refs.myTextInput).focus();
	  },
	  render: function() {
	    return (
	      <div>
	        <input type="text" ref="myTextInput" />
	        <input type="button" value="Focus the text input" onClick={this.handleClick} />
	      </div>
	    );
	  }
	});

	ReactDOM.render(
	  <MyComponent />,
	  document.getElementById('example')
	);





