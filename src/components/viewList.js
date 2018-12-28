import React ,{ Component } from "react";
import { API } from "../actions/api";
import { connect } from "react-redux";

class ViewList extends Component {

    state={
        searchText: 'mix',
        array: [],
    }

    componentDidMount() {
        this.search();
    }
    
    search = () => {
        // boxer
        // chow
        // mix
        // germanshepherd
        this.props.API(this.state.searchText) 
        .then(()=>{
            let res = this.props.api_data
            console.log(res);
            this.setState({
                array: res.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderItems = () => {
       return this.state.array.map((item, index) => {
            return (<div key={index} className="col-sm-3 col-xs-6 image_wrapper_inner"><img  src={item} alt={item}  className="img-responsive" /></div>);
        });
    }

    render() {
        return (
            <div>
                <div className="row mx-0">
                    <div className="col-12 search-barWrapper">
                        <input onChange={(event) => {this.setState({searchText: event.target.value})}} type="text"/>
                        <button onClick={() => this.search()}>search</button>
                    </div>    
                </div>
                <div className="images_wrapper row">
                    {this.state.array ? this.renderItems() : ""}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        api_data: state.data.api_data,
    };
}
export default connect(mapStateToProps, { API })(ViewList);