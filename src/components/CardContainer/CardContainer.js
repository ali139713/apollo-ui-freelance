import React, { Component } from 'react';
import FlexView from 'react-flexview/lib';
import Card from '../Card/Card'
class CardContainer extends Component {
    render() {
     return(
       <FlexView column marginLeft="2%" marginRight="2%" marginTop="3%" >      
            <FlexView basis="100%"  >
             <FlexView basis="50%" >
           <Card />
             </FlexView>
             <FlexView basis="50%" >
             <Card />
             </FlexView>
        </FlexView>
            <FlexView basis="100%" marginTop="3%" >
             <FlexView basis="50%" >
           <Card />
             </FlexView>
             <FlexView basis="50%" >
             <Card />
             </FlexView>
        </FlexView>
            <FlexView basis="100%" marginTop="3%" >
             <FlexView basis="50%" >
           <Card />
             </FlexView>
             <FlexView basis="50%" >
             <Card />
             </FlexView>
        </FlexView>
        </FlexView>

     )
    }
}

export default CardContainer;