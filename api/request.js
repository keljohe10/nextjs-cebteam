import 'isomorphic-fetch';

export const getProvider = async () => {
  const myHeaders = new Headers({
    Authorization:
      'Bearer sZa6s-IomsnwlmWmMyrMzeq64hWK87zMT7bYcNKjVro78H6JFzNRM2cOinI2AGBbXPbr0b7-3huDWIR07NxF1t-O8LcS7W5kBE00Ib0J0EPcZeH02N12OrM2IgwGyfQnCrQ0Oz2UCfDcnZtg6uGdjgJP3LdHcV-Rh7hbN0vdb0arUV9qFm5Z82xagLdK6iVCCTTg_NA0p-YPpd2YZFemQW1HyJrPSnWTs8hAkvfqUNhyGnSwm83wa31myWUb97PbsX6eq_0keXR6P7vREw17sSn2GmfAibPi30FeXJTr_pT1aYd9sr93xvj9KyygQqs_Xkq-VDjmLVfZzb7dEC3IwfeqzYMVXQAKdCEEpB1aTEOH-k3YrTF9wJzgsO5bNTsN3Oc_FC83jYAxO0a5dqfd2Oswp6o58TInidnHoOGP5rtkBFU67-MmT0NWpLnoIOMzVXcSntmGfHHqMuoAouPfTpxC628',
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
    Authorization:
      'Bearer sZa6s-IomsnwlmWmMyrMzeq64hWK87zMT7bYcNKjVro78H6JFzNRM2cOinI2AGBbXPbr0b7-3huDWIR07NxF1t-O8LcS7W5kBE00Ib0J0EPcZeH02N12OrM2IgwGyfQnCrQ0Oz2UCfDcnZtg6uGdjgJP3LdHcV-Rh7hbN0vdb0arUV9qFm5Z82xagLdK6iVCCTTg_NA0p-YPpd2YZFemQW1HyJrPSnWTs8hAkvfqUNhyGnSwm83wa31myWUb97PbsX6eq_0keXR6P7vREw17sSn2GmfAibPi30FeXJTr_pT1aYd9sr93xvj9KyygQqs_Xkq-VDjmLVfZzb7dEC3IwfeqzYMVXQAKdCEEpB1aTEOH-k3YrTF9wJzgsO5bNTsN3Oc_FC83jYAxO0a5dqfd2Oswp6o58TInidnHoOGP5rtkBFU67-MmT0NWpLnoIOMzVXcSntmGfHHqMuoAouPfTpxC628',
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
