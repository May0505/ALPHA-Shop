// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
// import cx from 'classnames';
import style from './style.module.scss';

const Step1 = memo(() => {
  const sexList = ['先生', '女士', '不明'];
  const sex = sexList.map((item) => {
    return (
      <option value="" key={item}>
        {item}
      </option>
    );
  });

  const cityList = [
    '請選擇縣市',
    '臺北市',
    '新北市',
    '桃園市',
    '臺中市',
    '臺南市',
    '高雄市',
    '新竹縣',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '屏東縣',
    '宜蘭縣',
    '花蓮縣',
    '臺東縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
    '基隆市',
    '新竹市',
    '嘉義市',
  ];
  const city = cityList.map((item) => {
    return (
      <option value="" key={item}>
        {item}
      </option>
    );
  });

  return (
    <div className={style.main}>
      <div className={style.title}>寄送地址</div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w160}`}>
          <label className={style.name}>稱謂</label>
          <select name="sex" id="sex" required>
            {sex}
          </select>
        </div>
        <div className={`${style.formItem} ${style.w350}`}>
          <label className={style.name}>姓名</label>
          <input type="text" placeholder="請輸入姓名" />
        </div>
      </div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w255}`}>
          <label className={style.name}>電話</label>
          <input type="text" placeholder="請輸入行動電話" />
        </div>
        <div className={`${style.formItem} ${style.w255}`}>
          <label className={style.name}>Email</label>
          <input type="text" placeholder="請輸入電子郵件" />
        </div>
      </div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w160}`}>
          <label className={style.name}>縣市</label>
          <select name="city" id="city" required>
            {city}
          </select>
        </div>
        <div className={`${style.formItem} ${style.w350}`}>
          <label className={style.name}>地址</label>
          <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </div>
  );
});

export default Step1;
