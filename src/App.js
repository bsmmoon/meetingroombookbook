import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Style from './Style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.style = Style.import();

    this.state = {
      searchOpen: false,
      currentCalendar: 'Aero',
      calendarSrcs: {
        'Aero': 'jb6i3e63fllvb3r6k2rprhfu78%40group.calendar.google.com',
        'China': 'r58ht4m27g54j6k8jlqcar2p4c%40group.calendar.google.com',
        'Siam': 'r0t36htoju34kt0r3mc6lvu13k%40group.calendar.google.com',
      }
    };
  }

  makeCalendarButtons() {
    let calendars = Object.keys(this.state.calendarSrcs);
    return (
      <div className="col-xs-12" style={this.style.base.align.hcvc}>
        {
          calendars.map(function(calendar) {
            return (
              <button key={calendar}
                onClick={() => this.setState({currentCalendar: calendar})}
                style={this.state.currentCalendar === calendar ? this.style.base.backgroundColour.lightGrey : this.style.base.backgroundColour.white}
              >{calendar}</button>
            )
          }.bind(this))
        }
      </div>
    )
  }

  componentDidMount() {
  }

  makeRoomSearchComponent() {
    const searchInputComponent = (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, this.style.base.padding.left.large, this.style.base.padding.right.large, this.style.base.padding.bottom.medium])}>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>From: <input type="date" ></input></div>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>To: <input type="date"></input></div>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>Pax: <input type="number"></input></div>
          <button style={this.style.base.backgroundColour.white}>Search</button>
        </div>
      </div>
    )
    const searchOpen = this.state.searchOpen;
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-12" style={Style.merge([this.style.base.backgroundColour.white, this.style.base.padding.left.large, this.style.base.padding.right.large, this.style.base.padding.bottom.medium, this.style.base.align.hcvc, this.style.base.font.bold])}>
            <button style={Style.merge([{width: '100%'}])}
              onClick={() => this.setState({searchOpen: !searchOpen})}>
              {searchOpen ? 'CLOSE SEARCH' : 'OPEN SEARCH'}
            </button>
          </div>
        </div>
        {searchOpen ? searchInputComponent : ''}
      </div>
    )
  }

  render () {
    const roomSearchComponent = this.makeRoomSearchComponent();
    const currentCalendar = this.state.currentCalendar;
    const src = ["https://calendar.google.com/calendar/embed?src=", this.state.calendarSrcs[currentCalendar], "&ctz=Asia%2FSingapore"].join('')
    const calendarButtons = this.makeCalendarButtons();

    return (
      <div className="container">
        <div className="row">
          {roomSearchComponent}
        </div>
        <div className="row">
          {calendarButtons}
        </div>
        <div className="row">
          <div className="col-xs-12" style={this.style.base.align.hcvc}>
            <iframe src={src} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default App
