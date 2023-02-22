import React,{Component} from 'react';
import {variables} from './Variables.js';
import '../src/research.css'

export class Research extends Component{
    render(){
    return (
        
        <div className="research-page">
        <h1>Research at University of Colombo</h1>
  
        <div className="research-list">
          <h2>Research Centers</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li><a href="#">Center for Contemporary Indian Studies (CCIS)</a></li>
            <li><a href="#">Center for Environmental Initiatives (CEI)</a></li>
            <li><a href="#">Center for Environmental Law and Policy (CELP)</a></li>
            <li><a href="#">Center for Excellence in Disability Research, Education and Practice (CEDREP)</a></li>
            <li><a href="#">Center for Open & Distance Learning – Cyber Campus</a></li>
            <li><a href="#">Center for the Study of Human Rights (CSHR)</a></li>
            <li><a href="#">Center of Research and Development (CRD)</a></li>
            <li><a href="#">Confucius Institute</a></li>
            <li><a href="#">National Education Research & Evaluation Centre (NEREC)</a></li>
            <li><a href="#">Staff Development Centre (SDC)</a></li>
            <li><a href="#">Social Policy Analysis and Research Centre (SPARC)</a></li>
          </ul>
        </div>
  
        <div className="research-list">
          <h2>Research Institutes</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li><a href="#">Agro-Technology and Rural Sciences (IARS)</a></li>
            <li><a href="#">Biochemistry, Molecular Biology and Biotechnology (IBMBB)</a></li>
            <li><a href="#">Human Resource Advancement (IHRA)</a></li>
            <li><a href="#">Indigenous Medicine (IIM)</a></li>
            <li><a href="#">National Institute of Library & Information Sciences (NILIS)</a></li>
            <li><a href="#">Postgraduate Institute of Medicine (PGIM)</a></li>
            <li><a href="#">Postgraduate Institute of Indigenous Medicine (PG-IIM)</a></li>
          </ul>
        </div>
  
        <div className="research-list">
          <h2>Research Projects</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li><a href="#">Accelerating Higher Education Expansion and Development (AHEAD)</a></li>
            <li><a href="#">Blended Learning Project</a></li>
            <li><a href="#">Career Guidance Unit (CGU)</a></li>
            <li><a href="#">CONTESSA</a></li>
            <li><a href="#">Higher Education for the Twenty-first Century</a></li>
            <li><a href="#">Improving Relevance and Quality of Undergraduate Education (IRQUE)</a></li>
            <li><a href="#">International Office – University of Colombo (IOUC)</a></li>
            <li><a href="#">Student Counsellors’ Office</a></li>
            <li><a href="#">University Business Linkage (UBL)</a></li>
          </ul>
        </div>
      </div>
      );
}
}