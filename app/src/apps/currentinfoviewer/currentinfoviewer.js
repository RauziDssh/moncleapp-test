import { imports } from '../../mpython-common/imports';
import { battery } from '../../mpython-common/battery';
import { render } from '../../mpython-common/render';
import { borders } from '../../mpython-common/borders';
import { date } from '../../mpython-common/date';
import { touch } from '../../mpython-common/touch';
import { viewer } from './viewer'

let cmdRunner;
let appScene = 'viewer';
let btnChoice = 1; // 0 left, 1 right, default is right
let set = 0;

const importDeps = () => {
  cmdRunner(imports());
}

// https://stackoverflow.com/a/4929629/2710227
const getDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
}

const getTime = () => {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');

  return hour + ':' + minute + ":" + second;
}

const showViewer = (arg) => {
  arg = getTime();
  cmdRunner(viewer(arg));
  cmdRunner(render());
};

const intervalFunc = () => 
{
  showViewer();
}

export const currentinfoviewerApp = {
  run: (execMonocle) => {
    importDeps();
    cmdRunner = execMonocle;
    setInterval(intervalFunc, 500);
  },
  leftBtnCallback: () => { // navigate
    console.log('left');
  },
  rightBtnCallback: () => { // select
    console.log('right');
  }
}
