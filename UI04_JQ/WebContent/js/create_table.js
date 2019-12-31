function makeTable(elem) {
    
    $table = $("<table border=1>");

    // 컬럼명을 가져오기 위함
    for(var i=0; i<1; i++) {
        $tr = $("<tr>");
        // ROW의 자식요소들의 길이만큼
        for(var j=0; j<elem.eq(0).children().length; j++) {
            // td에 태그명을 붙인다(EMPLOYEE_ID 등등)
            $td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
            // tr 태그에 td를 붙인다
            $tr.append($td);
        }
        // table에 tr을 붙인다
        $table.append($tr);
    }

    // 데이터 리스트를 가져오기 위함
    // ROW의 갯수만큼 큰 for문을 돌고
    for(var i=0; i<elem.length; i++) {
        $tr = $("<tr>");
        // 각 ROW마다 자식요소들의 길이만큼
        for(var j=0; j<elem.eq(i).children().length; j++) {
            // td에 text 내용을 붙인다
            $td = $("<td>").append(elem.eq(i).children().eq(j).text());
            $tr.append($td);
        }
        $table.append($tr);
    }

    return $table;
}