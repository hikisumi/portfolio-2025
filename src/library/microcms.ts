// SDK利用準備
import type {
  MicroCMSQueries,
  MicroCMSListContent,
  MicroCMSImage,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Work = {
  title: string;
  overview: string;
  period: string;
  scope: string;
  techStack: string;
  contents: string;
} & MicroCMSListContent;

export type Skill = {
  title: string;
  contents: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

// APIの呼び出し
export const getWorks = async (
  queries?: MicroCMSQueries,
  limit = 100,
  offset = 0,
) => {
  return await client.getList<Work>({
    endpoint: "works",
    queries: {
      limit,
      offset,
    },
  });
};

export const getSkills = async (
  queries?: MicroCMSQueries,
  limit = 100,
  offset = 0,
) => {
  return await client.getList<Skill>({
    endpoint: "skill",
    queries: {
      limit,
      offset,
    },
  });
};

export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
  });
};

export const getSkillDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Skill>({
    endpoint: "skill",
    contentId,
    queries,
  });
};
