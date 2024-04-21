import got from 'got'

export const withDefaultsJob = () => {
  return {
    engine: "Docker",
    docker: { image: "registry.hf.space/ateeqq-meta-llama-3-8b-instruct:latest", entrypoint: ["python", "app.py"] },
    deal: { Concurrency: 1 },
    verifier: "Noop",
    publisherSpec: {
      type: "ipfs",
    },
  };
};


export const submitJob = async (job: any) => {
  const results = await got("https://m53xh5o55j.execute-api.us-west-2.amazonaws.com/default/httpsProxy", {
    method: "POST",
    body: JSON.stringify(job),
  }).then((res) => res.json());


  return results
};