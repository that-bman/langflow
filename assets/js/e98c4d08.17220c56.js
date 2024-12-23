"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8034],{93485:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),l=t(28453);const a={title:"Travel planning agent",sidebar_position:8,slug:"/tutorials-travel-planning-agent"},o=void 0,r={id:"Tutorials/tutorials-travel-planning-agent",title:"Travel planning agent",description:"Build a Travel Planning Agent flow for an agentic application using the multiple Tool-calling agents.",source:"@site/docs/Tutorials/tutorials-travel-planning-agent.md",sourceDirName:"Tutorials",slug:"/tutorials-travel-planning-agent",permalink:"/tutorials-travel-planning-agent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Travel planning agent",sidebar_position:8,slug:"/tutorials-travel-planning-agent"},sidebar:"docs",previous:{title:"Sequential tasks agent",permalink:"/tutorials-sequential-agent"},next:{title:"Workspace concepts",permalink:"/workspace-overview"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and start a new flow",id:"open-langflow-and-start-a-new-flow",level:2},{value:"Create the travel planning agent flow",id:"create-the-travel-planning-agent-flow",level:2},{value:"Run the travel planning agent flow",id:"run-the-travel-planning-agent-flow",level:2}];function h(n){const e={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Build a ",(0,s.jsx)(e.strong,{children:"Travel Planning Agent"})," flow for an agentic application using the multiple Tool-calling agents."]}),"\n",(0,s.jsxs)(e.p,{children:["An ",(0,s.jsx)(e.strong,{children:"agent"}),' uses an LLM as its "brain" to select among the connected tools and complete its tasks.']}),"\n",(0,s.jsxs)(e.p,{children:["In this flow, multiple ",(0,s.jsx)(e.strong,{children:"Tool-calling agents"})," reason using an ",(0,s.jsx)(e.strong,{children:"Open AI"})," LLM to plan a travel journey. Each agent is given a different responsibility defined by its ",(0,s.jsx)(e.strong,{children:"System Prompt"})," field."]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Chat input"})," defines where the user wants to go, and passes the result to the ",(0,s.jsx)(e.strong,{children:"City Selection"})," agent. The ",(0,s.jsx)(e.strong,{children:"Local Expert"})," agent then adds information based on the selected cities, and the ",(0,s.jsx)(e.strong,{children:"Travel Concierge"})," assembles a seven day travel plan in Markdown."]}),"\n",(0,s.jsxs)(e.p,{children:["All agents have access to the ",(0,s.jsx)(e.strong,{children:"Search API"})," and ",(0,s.jsx)(e.strong,{children:"URL Content Fetcher"})," components, while only the Travel Concierge can use the ",(0,s.jsx)(e.strong,{children:"Calculator"})," for computing the trip costs."]}),"\n",(0,s.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(e.p,{children:["To use this flow, you need an ",(0,s.jsx)(e.a,{href:"https://platform.openai.com/",children:"OpenAI API key"})," and a ",(0,s.jsx)(e.a,{href:"https://www.searchapi.io/",children:"Search API key"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"open-langflow-and-start-a-new-flow",children:"Open Langflow and start a new flow"}),"\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"New Flow"}),", and then select the ",(0,s.jsx)(e.strong,{children:"Travel Planning Agent"})," flow."]}),"\n",(0,s.jsx)(e.p,{children:"This opens a starter flow with the necessary components to run an agentic application using multiple Tool-calling agents."}),"\n",(0,s.jsx)(e.h2,{id:"create-the-travel-planning-agent-flow",children:"Create the travel planning agent flow"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(17286).A+"",width:"2948",height:"1302"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Travel Planning Agent"})," flow consists of these components:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Multiple ",(0,s.jsx)(e.strong,{children:"Tool calling agent"})," components that use the connected LLM to reason through the user's input and select among the connected tools to complete their tasks."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.strong,{children:"Calculator"})," component performs basic arithmetic operations."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.strong,{children:"URL Content Fetcher"})," component scrapes content from a given URL."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.strong,{children:"Chat Input"})," component accepts user input to the chat."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.strong,{children:"Chat Output"})," component prints the flow's output to the chat."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.strong,{children:"OpenAI"})," model component sends the user input and prompt to the OpenAI API and receives a response."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"run-the-travel-planning-agent-flow",children:"Run the travel planning agent flow"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Add your credentials to the Open AI and Search API components."}),"\n",(0,s.jsxs)(e.li,{children:["In the ",(0,s.jsx)(e.strong,{children:"Chat output"})," component, click \u25b6\ufe0f Play to start the end-to-end application flow.\nA ",(0,s.jsx)(e.strong,{children:"Chat output built successfully"})," message and a \u2705 Check on all components indicate that the flow ran successfully."]}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:"Playground"})," to start a chat session.\nYou should receive a detailed, helpful answer to the journey defined in the ",(0,s.jsx)(e.strong,{children:"Chat input"})," component."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Now that your query has completed the journey from ",(0,s.jsx)(e.strong,{children:"Chat input"})," to ",(0,s.jsx)(e.strong,{children:"Chat output"}),", you have completed the ",(0,s.jsx)(e.strong,{children:"Travel Planning Agent"})," flow."]})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},17286:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/starter-flow-travel-agent-94f75fa203af9a49e2571bdc68bc6050.png"},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var s=t(96540);const l={},a=s.createContext(l);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);