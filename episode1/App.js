const heading=React.createElement('div',{
    id:"parent"
},
[React.createElement('div',{
    id:"child"
},
[React.createElement('h1',{},"Hello! i am learning react"),React.createElement('h1',{},"Hello! i am learning react from As")]),
React.createElement('div',{
    id:"child2"
},
[React.createElement('h1',{},"Hello! i am learning react"),React.createElement('h1',{},"Hello! i am learning react from As")])
]
);

console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);