class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', comment:'', comments: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit(e){
    event.preventDefault();
    this.setState(prevState => {
      let newComments = [...this.state.comments];
      newComments.push(state.form);
      return {form: {name: '', comment: ''}, comments: []};
    })
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form>
          <input type='text' 
          value={this.state.name} 
          onChange={this.handleChange} 
          />
        </form>
      </div>
    )
  }
}

export default Form
//localstorage.set