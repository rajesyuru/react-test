import React from 'react'
import {Route} from 'react-router-dom';
import Nav from './Nav'
import ShoppingPanel from './ShoppingPanel'
import TodoPanel from './ToDoPanel'
import PersonPanel from './PersonPanel'

const Page = () => {
    return (
        <div>
            <Nav />
            <Route path="/" exact render={() => <h1>Ini halaman utama</h1>} />
            <Route path="/product" exact component={ShoppingPanel} />
            <Route path="/todo" component={TodoPanel} />
            <Route path="/person" component={PersonPanel} />
        </div>
    )
}

export default Page
