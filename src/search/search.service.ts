import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchElasticDto } from "./dto/create-search.dto";

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService, private readonly configService: ConfigService) { }
  // tslint:disable-next-line:no-big-function
  public async createIndex() {
    const index = this.configService.get('ELASTICSEARCH_INDEX');
    const checkIndex = await this.esService.indices.exists({ index });
    // tslint:disable-next-line:early-exit
    if (checkIndex.statusCode === 404) {
      this.esService.indices.create(
        {
          index,
          body: {
            mappings: {
              properties: {
                name: {
                  type: 'text',
                  fields: {
                    keyword: {
                      type: 'keyword',
                      ignore_above: 256,
                    },
                  },
                },
                email: {
                  type: 'text',
                  fields: {
                    keyword: {
                      type: 'keyword',
                      ignore_above: 256,
                    },
                  },
                },
                phone_no: {
                  type: 'text',
                  fields: {
                    keyword: {
                      type: 'keyword',
                      ignore_above: 256,
                    },
                  },
                },
                address: {
                  type: 'text',
                  fields: {
                    keyword: {
                      type: 'keyword',
                      ignore_above: 256,
                    },
                  },
                }
              },
            },
            settings: {
              analysis: {
                filter: {
                  autocomplete_filter: {
                    type: 'edge_ngram',
                    min_gram: 1,
                    max_gram: 20,
                  },
                },
                analyzer: {
                  autocomplete: {
                    type: 'custom',
                    tokenizer: 'standard',
                    filter: ['lowercase', 'autocomplete_filter'],
                  },
                },
              },
            },
          },
        },
        (err: any) => {
          if (err) {
            console.log(err);
          }
        },
      );
    }
  }
  public async indexMember(member: any) {
    return this.esService.index({
      index: this.configService.get('ELASTICSEARCH_INDEX')!,
      body: member,
    });
  }




  public async searchElastic(param: SearchElasticDto) {
    return this.search(param.search_term);
  }

  public async search(text:string){
const {body}=await this.esService.search<any>({
  index : this.configService.get('ELASTICSEARCH_INDEX'),
  body : {
    query : {
      multi_match : {
        query : text ,
        fields:['name','email','phone_no','address']
      },
    },
  },
});
const hits=body.hits.hits;
return hits.map((item:any)=>item._source);
  }


  public async remove(postId: number) {
    this.esService.deleteByQuery({
      index: this.configService.get('ELASTICSEARCH_INDEX')!,
      body: {
        query: {
          match: {
            id: postId,
          }
        },
      },
    });
  }
}