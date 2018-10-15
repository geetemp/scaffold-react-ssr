import React from "react";
import { string, func } from "prop-types";

// eslint-disable-next-line no-use-before-define
Square.propTypes = {
  onClick: func.isRequired,
  value: string
};

// eslint-disable-next-line no-use-before-define
Square.defaultProps = {
  value: ""
};

function Square({ onClick, value = "" }) {
  return (
    <React.Fragment>
      <button className="square" onClick={onClick}>
        {value}
      </button>
      <style jsx>
        {`
          .square {
            background: #fff;
            border: 1px solid #999;
            float: left;
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            height: 34px;
            margin-right: -1px;
            margin-top: -2px;
            padding: 0;
            text-align: center;
            width: 34px;
          }

          .square:focus {
            outline: none;
          }
        `}
      </style>
      <style jsx>
        {`
          .test1 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test2 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test3 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test4 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test5 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test6 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test7 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test8 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test9 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test10 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test11 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test12 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test13 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test14 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test15 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test16 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test17 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test18 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test19 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test20 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test21 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test22 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test23 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test24 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test25 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test26 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test27 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test28 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test29 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test30 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test31 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test32 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test33 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test34 {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .test35 {
            background: #fff;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default Square;
