class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(key + ": " + JSON.stringify(value));
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertex) {
        if (!(vertex in this.adjacencyList)) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }

    addEdge(vertex1, vertex2){
        if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
}

var myGraph = new Graph()
myGraph.addVertex(2)
myGraph.addVertex(7)
myGraph.printGraph()