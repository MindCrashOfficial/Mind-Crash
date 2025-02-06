import{A as R,S as p}from"./loadSts-DswkXy72.js";import{c as $,d as v,f as M,g as L,C as N,E as z,h as j,I as q,e as B,M as G,P as H,R as U,b as V,a as J}from"./loadSts-DswkXy72.js";import{s as C}from"./index-B90s4y0v.js";import{a as Q,C as X}from"./index-B90s4y0v.js";import"./index-C5E-tzAB.js";const m="us-east-1",T=e=>{if(typeof(e==null?void 0:e.Arn)=="string"){const n=e.Arn.split(":");if(n.length>4&&n[4]!=="")return n[4]}},g=async(e,n,o)=>{var c;const i=typeof e=="function"?await e():e,t=typeof n=="function"?await n():n;return(c=o==null?void 0:o.debug)==null||c.call(o,"@aws-sdk/client-sts::resolveRegion","accepting first of:",`${i} (provider)`,`${t} (parent client)`,`${m} (STS default)`),i??t??m},x=(e,n)=>{let o;return async i=>{var l,s,S,f;if(!o){const{logger:d=(l=e==null?void 0:e.parentClientConfig)==null?void 0:l.logger,region:A,requestHandler:u=(s=e==null?void 0:e.parentClientConfig)==null?void 0:s.requestHandler,credentialProviderLogger:E}=e,I=await g(A,(S=e==null?void 0:e.parentClientConfig)==null?void 0:S.region,E),y=!h(u);o=new n({profile:(f=e==null?void 0:e.parentClientConfig)==null?void 0:f.profile,region:I,requestHandler:y?u:void 0,logger:d})}const{Credentials:t,AssumedRoleUser:c}=await o.send(new R(i));if(!t||!t.AccessKeyId||!t.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${i.RoleArn}`);const a=T(c),r={accessKeyId:t.AccessKeyId,secretAccessKey:t.SecretAccessKey,sessionToken:t.SessionToken,expiration:t.Expiration,...t.CredentialScope&&{credentialScope:t.CredentialScope},...a&&{accountId:a}};return a&&C(r,"RESOLVED_ACCOUNT_ID","T"),C(r,"CREDENTIALS_STS_ASSUME_ROLE_WEB_ID","k"),r}},h=e=>{var n;return((n=e==null?void 0:e.metadata)==null?void 0:n.handlerProtocol)==="h2"},W=(e,n)=>n?class extends e{constructor(i){super(i);for(const t of n)this.middlewareStack.use(t)}}:e,_=(e={},n)=>x(e,W(p,n));export{Q as $Command,$ as AssumeRoleCommand,v as AssumeRoleResponseFilterSensitiveLog,R as AssumeRoleWithWebIdentityCommand,M as AssumeRoleWithWebIdentityRequestFilterSensitiveLog,L as AssumeRoleWithWebIdentityResponseFilterSensitiveLog,N as CredentialsFilterSensitiveLog,z as ExpiredTokenException,j as IDPCommunicationErrorException,q as IDPRejectedClaimException,B as InvalidIdentityTokenException,G as MalformedPolicyDocumentException,H as PackedPolicyTooLargeException,U as RegionDisabledException,V as STS,p as STSClient,J as STSServiceException,X as __Client,_ as getDefaultRoleAssumerWithWebIdentity};
