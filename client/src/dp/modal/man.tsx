import React, { useState } from 'react';
import { MemberScope, Person } from './scope';

export interface Props {
  person: Person;
  win: number;
  onBuy: (num: number) => void;
  onClearWin: () => void;
}

export const Man: React.FC<Props> = ({ person, win, onClearWin, onBuy }) => {
  const [input, setInput] = useState('');
  const [_, forceUpdate] = useState(false);
  const { name, scope, buyIn = 0 } = person.getState();
  return (
    <div>
      <div>姓名：{name}</div>
      <div>分数：{scope}</div>
      <div>购买次数:{buyIn}</div>
      <div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            person.buy(Number(input));
            onBuy(Number(input));
            setInput('');
          }}
        >
          出价
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            onBuy(scope);
            person.allin();
          }}
        >
          all in
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            person.buyIn();
            forceUpdate((b) => {
              return !b;
            });
          }}
        >
          buy in
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            person.win(win);
            onClearWin();
          }}
        >
          win
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
