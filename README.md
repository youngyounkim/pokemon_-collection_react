# 프로젝트 명

포켓몬 도감

# 프로젝트 목표 & 의도

-   포켓몬 api를 이용하여 원하는 포켓몬 정보를 확인할 수 있는 프로젝트
-   검색 기능을 제공하여 id나 이름으로 검색할 수 있도록 함
-   검색 시 포켓몬 도감에 있는 포켓몬의 id와 이름을 리스트로 출력하여 검색 가이드를 제공
-   포켓몬 리스트는 무한 스크롤을 제공하여 끊기지 않고 계속 확인할 수 있도록 제작
-   포켓몬 상세 페이지에서는 포켓몬의 기본 정보와 진화 정보를 출력

# 폴더 구조

📦src<br/>
┣ 📂components<br/>
┃ ┣ 📂atoms<br/>
┃ ┃ ┣ 📂Button<br/>
┃ ┃ ┗ 📂input<br/>
┃ ┣ 📂molecules<br/>
┃ ┃ ┣ 📂PokemonCard<br/>
┃ ┃ ┣ 📂PokemonInfoCard<br/>
┃ ┃ ┗ 📂SearchCard<br/>
┃ ┗ 📂template<br/>
┃   ┣ 📂PokemonInfo<br/>
┃   ┣ 📂PokemonList<br/>
┃   ┣ 📂SearchHeader<br/>
┃   ┗ 📂SearchList<br/>
┣ 📂hooks<br/>
┣ 📂lib<br/>
┃ ┣ 📂axios<br/>
┃ ┗ 📂recoil<br/>
┣ 📂models<br/>
┣ 📂pages<br/>
┃ ┣ 📂Detail<br/>
┃ ┗ 📂Home<br/>
┣ 📂types<br/>
┗ 📂util
