import React, {Component} from 'react'


class ListContacts extends Component { //do defalt export after this line

render() { //render() describes UI of the component
    console.log('Props', this.props)
    return (
        <ol className ='contact-list'>

        </ol>

)
}

}

export default ListContacts