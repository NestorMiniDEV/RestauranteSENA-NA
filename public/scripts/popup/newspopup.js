const newsTools = document.getElementById('newsTools'),
	  addNews = document.getElementById('addNews'),
	  editNews = document.getElementById('editNews');

openToolsNew = () => newsTools.showModal();
closeToolsNew = () => newsTools.close();

openAddNew = () => addNews.showModal();
closeAddNew = () => addNews.close();

openEditNew = () => editNews.showModal();
closeEditNew = () => editNews.close();