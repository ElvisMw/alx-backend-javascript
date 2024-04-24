// Load balancer function to resolve with the first promise that resolves
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }
  