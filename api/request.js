import 'isomorphic-fetch';

export const getProvider = async () => {
  const myHeaders = new Headers({
    Authorization: `Bearer ${process.env.TOKEN}`,
  });
  var miInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  };
  let req = await fetch(
    'https://api.providers.test.cebroker.com/providers/2405/provider?hasCebNowEnabled=true',
    miInit
  );
  return req.json();
};

export const getCourses = async () => {
  const myHeaders = new Headers({
    Authorization: `Bearer ${process.env.TOKEN}`,
  });
  var miInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  };
  let req = await fetch(
    'https://api.providers.test.cebroker.com/courses/completions?ids[]=436599&ids[]=420945&ids[]=403973&ids[]=389298&ids[]=352376&ids[]=351941&ids[]=347188&ids[]=333296&ids[]=332831&ids[]=328523&ids[]=455856&ids[]=451983&ids[]=431856&ids[]=431489&ids[]=426902&',
    miInit
  );
  return req.json();
};
