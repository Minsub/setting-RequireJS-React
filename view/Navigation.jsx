// @Navigation.jsx
define([
    'react','react-dom'
], function(React, ReactDOM) {

    var linkList = [
        {
            title: "Naver", href :"http://www.naver.com/"
        },
        {
            title: "Daum", href :"http://www.Daum.com/"
        },
        {
            title: "Amazon", href :"http://www.amazon.com/"
        }
    ];

    var Navigation = function() {
        this.component = React.createClass({
            links: function() {
                return linkList.map(function(link) {
                    return (
                        <li><a href={link.href} target={link.target || '_self'}>{link.title}</a></li>
                    );
                });
            },
            render: function() {
                return (
                    <div>
                        <p> Navigation </p>
                        <ul className="nav">
                            {this.links()}
                        </ul>
                    </div>
                );
            }
        });
    };

    

    Navigation.prototype.render = function(renderArea) {
        ReactDOM.render(
            React.createElement(this.component, {
                linkList: linkList
            }),
            renderArea
        );
    };

    return Navigation;

});