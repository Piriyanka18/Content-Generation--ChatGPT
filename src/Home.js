import React,{Component} from 'react';
import '../src/home.css';

export class Home extends Component{
    render(){
        return(
            <div> 
                
                <header>
                <h2>Welcome to the University of Colombo</h2>
                </header>
                <main>
                 <p>The University of Colombo is a leading university in Sri Lanka, offering a wide range of undergraduate and postgraduate programs in various disciplines. Our academic programs are designed to provide students with a well-rounded education, equipping them with the knowledge and skills they need to excel in their chosen fields.</p>
                 <p>Explore our website to learn more about our academic programs, research initiatives, and the many opportunities available to students at the University of Colombo.</p>
             </main>
      <footer>
        <p>&copy; University of Colombo. All rights reserved.</p>
      </footer>
            </div>
        )
    }
}

