import React from 'react';
import Search from './Search';
import Unsplash from '../api/Unsplash';
import Imagelist from  './Imagelist';

class App extends React.Component {
    state = { imagesne: [] };
    onSearchSubmit = async (term) => {

        const response = await Unsplash.get('https://api.unsplash.com/search/photos', {

            params: { query: term },



        });
        this.setState({ imagesne: response.data.results });
    }

    render() {
        return <div className="ui container" style={{ marginTop: '10px' }}>

            <Search onSubmitne={this.onSearchSubmit} />
        <Imagelist imagesne1={this.state.imagesne}/>
        </div>
    }
}


export default App;