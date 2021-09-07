export default class Pagination {
	private page;

	private size;

	private limit;

	private offset;

	getLimit() {
	  return this.limit;
	}

	getOffSet() {
	  return this.offset;
	}

	constructor(page, size) {
	  this.page = page;
	  this.size = size;

	  this.limit = this.size ? +this.size : 3;
	  this.offset = this.page ? this.page * this.limit : 0;
	}

	getPaginationData(data:any, total:number) {
			 const currentPage = (this.page !== undefined && this.page >= 0) ? +this.page : 0;
			 const totalPage = Math.ceil(total / this.limit);

		return {
	    total, data, totalPage, currentPage,
	  };
	}
}
