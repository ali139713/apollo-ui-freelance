import React, { Component } from 'react';
import FlexView from 'react-flexview/lib';
import Card from '../Card/Card'
class CardContainer extends Component {
    render() {
     return(
       <FlexView style = {{backgroundColor:"#eff3f7"}} column marginLeft="2%" marginRight="2%" marginTop="3%"  >      
            <FlexView basis="100%"  >
             <FlexView basis="50%" height="325px" >
           <Card header="Contacts That Opened My Email In The Last Hour" />
             </FlexView>
             <FlexView   basis="50%" >
             <Card header="Complete My Daily Tasks" />
             </FlexView>
        </FlexView>
            <FlexView basis="100%" marginTop="3%" >
             <FlexView basis="50%"  >
           <Card header="Last Week's Email Stats" />
             </FlexView>
             <FlexView basis="50%"  >
             <Card header="This Week's Email Stats" />
             </FlexView>
        </FlexView>
            <FlexView basis="100%" marginTop="3%" >
             <FlexView basis="50%"  >
           <Card header="Last Week's Call Stats" />
             </FlexView>
             <FlexView basis="50%"  >
             <Card header="This Week's Call Stats" />
             </FlexView>
        </FlexView>
            <FlexView basis="100%" marginTop="3%" >
             <FlexView basis="50%"  height="325px" >
           <Card header="My Scheduled Emails" />
             </FlexView>
           
        </FlexView>
        </FlexView>

     )
    }
}

export default CardContainer;