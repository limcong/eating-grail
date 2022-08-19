import React, { useState } from 'react';
import { Man } from './modal/man';
import { Person } from './modal/scope';

const persons: Person[] = [];

export const Dp: React.FC = () => {
  const [scope, setScope] = useState(0);
  const [value, setValue] = useState('');
  return (
    <div>
      <div>池子：{scope}</div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="请输入新玩家姓名"
        style={{ marginBottom: '30px', marginTop: '30px' }}
      />
      <button
        type="button"
        onClick={() => {
          if (value) {
            persons.push(new Person({ name: value, scope: 10000 }));
            setValue('');
          }
        }}
      >
        加个人
      </button>
      {persons.map((item) => {
        return (
          <Man
            key={item.myId}
            person={item}
            onBuy={(num: number) => {
              setScope(scope + num);
            }}
            win={scope}
            onClearWin={() => {
              setScope(0);
            }}
          />
        );
      })}
    </div>
  );
};
